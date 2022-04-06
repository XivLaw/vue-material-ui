import type { Plugin } from 'vite';

export default (...arg): Plugin => {
  console.log(arg, 111111111111111);
  return { name: null }
}