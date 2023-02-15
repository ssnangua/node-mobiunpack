import { PromiseWithChild } from "child_process";

/**
 * unpack .mobi file
 */
export declare function unpack(
  mobiFile: string,
  outputDir: string
): PromiseWithChild<{ stdout: string; stderr: string }>;

/**
 * export images from a .mobi file
 */
export declare function exportImages(
  mobiFile: string,
  outputDir: string
): Promise<{ length: number }>;
