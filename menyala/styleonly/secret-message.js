//?./menyala/secret-message.js
import { LitElement, html, css } from '/lit-core.min.js';

class SecretMessage extends LitElement {
    static styles = css`
        :host {
            display: block;
            font-family: 'Roboto', sans-serif;
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
        }
        .card {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .secret-container {
            margin: 1rem 0;
            padding: 1rem;
            background-color: #e0e0e0;
            border-radius: 4px;
            cursor: pointer;
        }
        .secret-message {
            font-size: 1.2rem;
            font-weight: bold;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        .revealed .secret-message {
            opacity: 1;
        }
        button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #0056b3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    `;

    //TODO buat properties bertipe statis dengan secretMessage bertipe String, isRevealed bertipe Boolean, dan isAuthenticated bertipe Boolean

    //TODO buat constructor yang memanggil super() dan menginisialisasi secretMessage, isRevealed, dan isAuthenticated

    //TODO buat connectedCallback() yang memanggil checkAuthentication()

    //TODO buat checkAuthentication() yang menginisialisasi isAuthenticated dengan nilai isLoggedIn dari localStorage

    render() {
        if (!this.isAuthenticated) {
            return html`
                <div class="container">
                    <div class="card">
                        <h2>Access Denied</h2>
                        <p>Please log in to view the secret message.</p>
                    </div>
                </div>
            `;
        }

        return html`
            <div class="container">
                <div class="card">
                    <h2>Secret Message</h2>
                    <div class="secret-container ${this.isRevealed ? 'revealed' : ''}" @click="${this.toggleReveal}">
                        <p class="secret-message">${this.secretMessage}</p>
                    </div>
                    <button @click="${this.toggleReveal}">
                        ${this.isRevealed ? 'Hide' : 'Reveal'} Secret
                    </button>
                    <button @click="${this.logout}">Logout</button>
                </div>
            </div>
        `;
    }

    //TODO buat toggleReveal() yang mengubah nilai isRevealed

    //TODO buat logout() yang menghapus isLoggedIn dari localStorage dan mengirimkan event 'logout'

}

//TODO daftarkan custom element dengan tag 'secret-message'
