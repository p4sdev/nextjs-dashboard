import '@/app/ui/global.css'
import { geist } from '@/app/ui/fonts'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${geist.className} antialiased`}>
				{children}
				<SpeedInsights />
			</body>
		</html>
	)
}
