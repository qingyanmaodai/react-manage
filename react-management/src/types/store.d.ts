// 类型声明文件，不要直接使用引入import...from..
// TS中提供ReturnType,用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>;
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: function;
}
