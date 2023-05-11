// 1. 使用if
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
    <>
        {/* 1. 使用if */}
        <div>
            {content}
        </div>


        {/* 2. 使用 条件 ? 运算符 */}
        <div>
        {isLoggedIn ? (
            <AdminPanel />
        ) : (
            <LoginForm />
        )}
        </div>

        {/* 3. 不需要 else 分支时，使用 逻辑 && 语法 */}
        <div>
        {isLoggedIn && <AdminPanel />}
        </div>
    </>
);




