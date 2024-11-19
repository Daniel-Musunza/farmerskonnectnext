import Shell from "./shell";

import { Metadata, ResolvingMetadata } from 'next/types';


export async function generateMetadata(
): Promise<Metadata> {

    return {
        title: "Solutions | Farmers' konnect",
        description: "Farmers' konnect solutions",
       keywords: 'Farmers konnect, Agricultural solutions in kenya, '
    }
}
export default function Solutions() {
    return (
        <>
            <Shell />
        </>
    );
}
