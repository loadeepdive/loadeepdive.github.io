import Navigation from "./components/home/navigation";

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
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  )
}