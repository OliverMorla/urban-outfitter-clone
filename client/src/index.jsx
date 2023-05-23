import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { AuthProvider } from "./contexts/AuthContext";
import { PersistGate } from "redux-persist/integration/react";
import App from './App'
import { GlobalProvider } from "./contexts/GlobalContext";

// Using createRoot to enable concurrent mode
const root = createRoot(document.getElementById('root'));

// Rendering the application inside a StrictMode component and a Provider component
root.render(
    <StrictMode>
        <GlobalProvider>
            <AuthProvider>
                <Provider store={store}>
                    <PersistGate loading={"loading"} persistor={persistor}>
                        <App />
                    </PersistGate>
                </Provider>
            </AuthProvider>
        </GlobalProvider>
    </StrictMode>
)