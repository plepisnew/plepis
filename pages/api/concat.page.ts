import { NextApiRequest, NextApiResponse } from 'next';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { pipeline } from 'stream/promises';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ffmpeg = createFFmpeg();
  await ffmpeg.load();

  const sources: string[] = JSON.parse(req.body).sources;
  let textContent = '';

  /* Write to FS */
  const writePromises: Promise<void>[] = sources.map(async (source: string, index: number) => {
    const clipName = `clip${index}.mp4`;
    textContent += `file ${clipName}\n`;
    return ffmpeg.FS('writeFile', clipName, await fetchFile(source));
  });
  await Promise.all(writePromises);

  /* Concatenate clips */
  ffmpeg.FS('writeFile', 'clips.txt', textContent);
  await ffmpeg.run('-f', 'concat', '-i', 'clips.txt', '-c', 'copy', 'out.mp4');
  const video = ffmpeg.FS('readFile', 'out.mp4');

  /* Clear FS */
  ffmpeg.FS('unlink', 'clips.txt');
  ffmpeg.FS('unlink', 'out.mp4');
  sources.forEach((_: string, index: number) => ffmpeg.FS('unlink', `clip${index}.mp4`));

  res.setHeader('Content-Type', 'application/mp4');
  res.setHeader('Content-Disposition', 'attachment; filename=output.mp4');
  await pipeline([video], res);
}
