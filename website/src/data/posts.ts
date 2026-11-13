import * as firstEN from '../content/build-log/first-public-build.en.md';
import * as firstZH from '../content/build-log/first-public-build.zh-CN.md';
import * as methodsEN from '../content/build-log/working-methods.en.md';
import * as methodsZH from '../content/build-log/working-methods.zh-CN.md';
import type { Locale } from './site';

export const POSTS = [methodsEN, methodsZH, firstEN, firstZH];
export const postsFor = (locale: Locale) => POSTS.filter((post) => post.frontmatter.locale === locale);
