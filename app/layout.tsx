import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'SERA — Modern Kitchen · Demo',description:'A fictional restaurant concept by Max Volkov.',openGraph:{title:'SERA — Modern Kitchen',description:'Season-led food, open fire and a relaxed room. Demo concept.',type:'website'},icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
