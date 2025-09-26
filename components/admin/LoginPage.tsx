import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Check for username 'admin' and password 'admin'
        if (username === 'admin' && password === 'admin') {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            window.location.hash = '#/admin/dashboard';
        } else {
            setError('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">لوحة تحكم المشرف</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="username">
                            اسم المستخدم
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="password">
                            كلمة المرور
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-right"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4 text-right">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            تسجيل الدخول
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;