export type Title = {
  title: string,
  level: number,
  html: string
}

export type MarkdownData = {
  title?: Title[],
  code: string
}
