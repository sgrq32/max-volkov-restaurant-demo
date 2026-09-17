import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = {title:'SERA — ресторан современной северной кухни',description:'Демонстрационный сайт ресторана современной северной кухни.',openGraph:{title:'SERA — современная кухня',description:'Сезонные продукты, живой огонь и камерная атмосфера.',type:'website'},icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
