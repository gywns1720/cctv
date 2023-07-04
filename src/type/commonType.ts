import type { ReactElement, ReactNode } from 'react';

/**
 * @type {readonly [P in keyof T]: T[P]} 읽기전용 타입
 * @description 객체를 읽기전용 객체 타입으로 적용합니다.
 */
export type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * @type {[K in keyof T]: T[K] | null} Null Or Value 타입
 * @description 객체를 Null 값이 허용된 타입으로 적용합니다.
 */
export type Nullable<T> = { [K in keyof T]: T[K] | null };

/**
 * @type {[K in keyof Omit<T, K>]: Omit<T, K>[K] | null} 제외 안된 속성들은 Null 이 포함됩니다.
 * @description 특정 속성만 제거한 타입을 정의합니다. 정의된 속성은 Null 값을 포함합니다.
 */
export type NullOmit<T, K extends string | symbol | number> = Nullable<
  Omit<T, K>
>;

/**
 * @description 자식 컴포넌트 타입을 정의합니다.
 * ReactElement 복수의 컴포넌트 요소를 삽입할 수 없습니다.
 * ReactElement[] 반복문으로 컴포넌트 요소를 삽입할 수 없습니다.
 * ReactNode 모든 부분을 허용합니다.
 */
export type ChildrenType = ReactElement | ReactElement[] | ReactNode | string;

/**
 * @desc 문자열과 숫자 둘 중하나인 타입입니다.
 */
export type StringNumber = string | number;
