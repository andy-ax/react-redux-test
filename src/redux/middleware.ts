// 正常的中间件
export const log = (store: any) => (next: any) => (action: any) => {
    console.log(action)
    next(action);
}
// 对action进行封装的中间件，其中action为函数
export const thunk = (store: any) => (next: any) => (action: any) => {
    if (action instanceof Function) {
        action(store.dispatch, store.getState);
    } else {
        next(action);
    }
}
// 对action进行封装的中间件，其中action为promise
export const promise = (store: any) => (next: any) => (action: any) => {
    if (action instanceof Promise) {
        action.then(data => {
            next(data);
        });
    } else {
        next(action);
    }
}