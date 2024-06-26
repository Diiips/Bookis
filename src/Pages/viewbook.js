import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './viewbook.css';

export default function ViewBook() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className='viewbook-page'>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div className='pdf-container'>
                    <Viewer
                        fileUrl='https://bjmukemaudfqbltsyqxp.supabase.co/storage/v1/object/sign/books/Cloud_Computing_textbook.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJib29rcy9DbG91ZF9Db21wdXRpbmdfdGV4dGJvb2sucGRmIiwiaWF0IjoxNzE3OTE0MDAzLCJleHAiOjE3ODA5ODYwMDN9.fR7cm35wIdGYrV6BIU7sFnlag4ERzv-O9o0pJoM6cZA&t=2024-06-09T06%3A20%3A06.457Z'
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    );
}
