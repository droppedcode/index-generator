/** Options for the index generator. */
export interface Options {
  /** Path to the processes folder. */
  paths: string[];

  /** Path of the output file, if not absolute, then relative to the folder path. */
  output: string;

  /**
   * Regex to match for including a file.
   *
   * @default [ /*.ts$/ ]
   */
  includes: RegExp[];

  /**
   * Regex to match for excluding a file.
   *
   * @default []
   */
  excludes: RegExp[];

  /** Line separator. */
  newline: string;

  /**
   * Header added to the begging of the file.
   *
   * @default
   * ```ts
   * This file was generated by a tool.
   * Do not modify it.
   * ```
   */
  header: string;

  /**
   * Create file only if it will contain any exports.
   *
   * @default true
   */
  createFileOnlyIfNeeded: boolean;

  /**
   * The index file generation mode.
   *
   * @default CreateMode.root
   */
  mode: CreateMode;

  /**
   * The header generation generation mode.
   *
   * @default HeaderMode.multiline
   */
  headerMode: HeaderMode;

  /**
   * The export line format.
   * The format can contain the following variables:
   * - name: the name of the file.
   * - ext: the extension of the file.
   * - abs: the absolute path of the file.
   * - rel: the relative path of the file.
   *
   * @default export * from '{rel}{name}';
   */
  format: string;

  /**
   * Should the file end with a newline.
   */
  newlineAtTheEndOfFile: boolean;

  /**
   * File write method.
   * If defined the file writing will be skipped.
   */
  writeFile?: (output: string, content: string) => void;
}

/** The index file generation mode. */
export enum CreateMode {
  /** Put the output file to the path defined, if not absolute then relative to the cwd. */
  Path = 'path',
  /** Put the output file into the root folder(s). */
  Root = 'root',
  /** File per folder, including sub folder files from the individual files. */
  PerFolder = 'folder',
  /** File per folder, including all sub folder index files, ignoring the individual files. */
  PerFolderWithSub = 'sub',
}

/** The header generation mode. */
export enum HeaderMode {
  Disabled = 'disabled',
  /** Append without any changes. */
  Raw = 'raw',
  /** Append with single line comment. */
  SinglelineComment = 'single',
  /** Append with multiline line comment. */
  MultilineComment = 'multi',
}
