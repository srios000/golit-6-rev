import {LitElement, html, css} from '/lit-core.min.js';

// Login Form Component
class LoginForm extends LitElement {
    static styles = css`
    :host {
        display: block;
        font-family: 'Roboto', sans-serif;
        --primary-color: #6200ea;
        --primary-color-hover: #3700b3;
        --background-color: #f5f5f5;
        --card-background: #ffffff;
        --input-border-color: #bdbdbd;
        --input-border-focus-color: #6200ea;
        --text-color: #000000;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: var(--background-color);
    }
    .login-form {
        background-color: var(--card-background);
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    input {
        padding: 16px;
        border: 1px solid var(--input-border-color);
        border-radius: 4px;
        font-size: 16px;
        color: var(--text-color);
        transition: border-color 0.3s ease;
    }
    input:focus {
        border-color: var(--input-border-focus-color);
        outline: none;
    }
    button {
        padding: 12px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: var(--primary-color-hover);
    }
    .error-message {
        color: red;
        font-size: 14px;
        margin-top: 8px;
    }
`;

    //TODO buat properties dan constructor di sini. Properties adalah static dan berisi username, password, dan errorMessage


    //TODO buat constructor yang menginisialisasi username, password, dan errorMessage


    render() {
        return html`
            <div class="container">
                <div class="login-form">
                    //TODO ubah tag <form> pada line di bawah ini dengan event listener submit yang memanggil method _handleSubmit
                    <form> 
                        <input
                            type="text"
                            placeholder="Username"
                            //TODO tambahkan .value dan @input untuk menghubungkan input dengan property username
                            required
                        >
                        <input
                            type="password"
                            placeholder="Password"
                            //TODO tambahkan .value dan @input untuk menghubungkan input dengan property password
                            required
                        >
                        <button type="submit">Login</button>
                        //TODO tambahkan error message jika login gagal

                    </form>
                </div>
            </div>
        `;
    }

    async _handleSubmit(e) {
        //TODO tambahkan kode untuk menghandle submit form
    }
}

//TODO daftarkan custom element dengan tag 'login-form'
