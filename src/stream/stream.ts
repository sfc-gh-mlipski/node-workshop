import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createDeflate, createGzip } from 'zlib';
import { pipeline, Stream, Transform } from 'stream';

type Record = {
  name: string;
  startDate: number;
  finalTime: number;
  startSize: number;
  endSize: number;
  compression: number;
};

const fileName = 'src/stream/logs.csv';
const inputStream = createReadStream(fileName);

const data = new Set<Record>([
  {
    name: 'gzip',
    startDate: 0,
    finalTime: 0,
    startSize: 0,
    endSize: 0,
    compression: 0,
  },
  {
    name: 'brotli',
    startDate: 0,
    finalTime: 0,
    startSize: 0,
    endSize: 0,
    compression: 0,
  },
  {
    name: 'deflate',
    startDate: 0,
    finalTime: 0,
    startSize: 0,
    endSize: 0,
    compression: 0,
  },
]);

const actions = {
  gzip: createGzip,
  brotli: createBrotliCompress,
  deflate: createDeflate,
};

data.forEach(item => {
  const writeStream = createWriteStream(`./${fileName}.${item.name}`);
  const actionStream = actions[item.name]() as Transform;

  inputStream.on('open', () => {
    item.startDate = Date.now();
  })

  inputStream.on('data', (chunk: Buffer) => {
    item.startSize += chunk.byteLength;
  })

  actionStream.on('close', () => {
    item.finalTime = Date.now() - item.startDate;
  })

  actionStream.on('data', (chunk: Buffer) => {
    item.endSize += chunk.byteLength;
  })

  writeStream.on('close', () => {
    item.compression = item.endSize * 100 / item.startSize;
  })

  pipeline(inputStream, actionStream, writeStream, err => {
    if (err) {
      console.error('Pipeline failed', err);
    } else {
      console.log('Pipeline succeeded');
      console.log(item);
    }
  });
});
