// components/ClientOnly.js
import { useEffect, useState } from 'react';

export default function ClientOnly({ children }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // le rendu ne se fait qu’après que le composant soit monté côté client
    }, []);

    if (!isClient) return null; // ne rend rien côté serveur
    return <>{children}</>;
}
