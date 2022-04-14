import type MarkdownIt from 'markdown-it';
import type { MarkdownData } from '../types'; 

export default (md: MarkdownIt, tags = ['h1', 'h2']) => {
  md.renderer.rules.heading_open = (tokens, i, options, _env, self) => {
    const token = tokens[i]
    if (tags.includes(token.tag)) {
      console.log(tokens, i, options, _env, self);
      return self.renderToken(tokens, i, options);
    }
  };
}