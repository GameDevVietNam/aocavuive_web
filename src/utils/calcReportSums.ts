import { IReport } from '@/interfaces/report'

function calcReportSums(reports: IReport[]) {
	const now = Date.now()
	const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

	// Initialize result objects
	const totalSums: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0 }
	const lastWeekSums: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0 }

	// Process each report
	reports.forEach((report) => {
		// Add to total sum for the type
		if (totalSums[report.type] !== undefined) {
			totalSums[report.type] += report.value
		}

		// Add to last week's sum if within 7 days
		if (report.createdAt >= oneWeekAgo) {
			if (lastWeekSums[report.type] !== undefined) {
				lastWeekSums[report.type] += report.value
			}
		}
	})

	return {
		totalSums,
		lastWeekSums,
	}
}

export default calcReportSums
