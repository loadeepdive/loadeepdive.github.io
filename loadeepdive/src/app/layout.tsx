import Navigation from "./components/navigation/navigation";
import './styles/globals.css'
export const metadata = {
  title: "LostArk Deep Dive",
  description: "lostark deep dive project"
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <body>
        <ul>
        <Navigation></Navigation>
        {children}
        </ul>
      </body>
    </html>
  )
}