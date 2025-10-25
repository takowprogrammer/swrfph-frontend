export interface ExportOptions {
  format: 'csv' | 'pdf'
  dateFrom?: string
  dateTo?: string
  status?: string
  orderIds?: string[]
}

export class ExportService {
  /**
   * Export orders to CSV format
   */
  static exportToCSV(orders: any[], filename: string = 'orders.csv'): void {
    if (!orders || orders.length === 0) {
      alert('No orders to export')
      return
    }

    // Define CSV headers
    const headers = [
      'Order ID',
      'Date',
      'Status',
      'Total Price (FCFA)',
      'Items Count',
      'Medicines',
      'Quantities',
      'Prices (FCFA)'
    ]

    // Convert orders to CSV rows
    const csvRows = orders.map(order => {
      const medicines = order.items?.map((item: any) => item.medicine?.name || 'Unknown').join('; ') || 'N/A'
      const quantities = order.items?.map((item: any) => item.quantity).join('; ') || 'N/A'
      const prices = order.items?.map((item: any) => item.price).join('; ') || 'N/A'

      return [
        order.id,
        new Date(order.createdAt).toLocaleDateString(),
        order.status,
        order.totalPrice.toLocaleString(),
        order.items?.length || 0,
        medicines,
        quantities,
        prices
      ]
    })

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...csvRows.map(row => row.map(field => `"${field}"`).join(','))
    ].join('\n')

    // Download CSV file
    this.downloadFile(csvContent, filename, 'text/csv')
  }

  /**
   * Export orders to PDF format using browser print
   */
  static exportToPDF(orders: any[], filename: string = 'orders.pdf'): void {
    if (!orders || orders.length === 0) {
      alert('No orders to export')
      return
    }

    // Create HTML content for PDF
    const htmlContent = this.generatePDFHTML(orders)

    // Open print dialog
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(htmlContent)
      printWindow.document.close()
      printWindow.focus()
      printWindow.print()
    }
  }

  /**
   * Generate HTML content for PDF export
   */
  private static generatePDFHTML(orders: any[]): string {
    const currentDate = new Date().toLocaleDateString()
    const totalAmount = orders.reduce((sum, order) => sum + order.totalPrice, 0)

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Order History Report</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #10b981;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #10b981;
              margin: 0;
            }
            .header p {
              margin: 5px 0 0 0;
              color: #666;
            }
            .summary {
              background: #f9fafb;
              padding: 15px;
              border-radius: 8px;
              margin-bottom: 20px;
            }
            .summary h3 {
              margin: 0 0 10px 0;
              color: #374151;
            }
            .summary-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
            }
            .summary-item {
              text-align: center;
            }
            .summary-value {
              font-size: 24px;
              font-weight: bold;
              color: #10b981;
            }
            .summary-label {
              font-size: 14px;
              color: #666;
              margin-top: 5px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            }
            th, td {
              border: 1px solid #e5e7eb;
              padding: 12px;
              text-align: left;
            }
            th {
              background-color: #f9fafb;
              font-weight: bold;
              color: #374151;
            }
            tr:nth-child(even) {
              background-color: #f9fafb;
            }
            .status {
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: bold;
              text-transform: uppercase;
            }
            .status-pending { background-color: #fef3c7; color: #92400e; }
            .status-processing { background-color: #dbeafe; color: #1e40af; }
            .status-completed { background-color: #d1fae5; color: #065f46; }
            .status-cancelled { background-color: #fee2e2; color: #991b1b; }
            .footer {
              margin-top: 30px;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Order History Report</h1>
            <p>Generated on ${currentDate}</p>
          </div>

          <div class="summary">
            <h3>Summary</h3>
            <div class="summary-grid">
              <div class="summary-item">
                <div class="summary-value">${orders.length}</div>
                <div class="summary-label">Total Orders</div>
              </div>
              <div class="summary-item">
                <div class="summary-value">${totalAmount.toFixed(2)} FCFA</div>
                <div class="summary-label">Total Amount</div>
              </div>
              <div class="summary-item">
                <div class="summary-value">${(totalAmount / orders.length).toFixed(0)} FCFA</div>
                <div class="summary-label">Average Order Value</div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Price</th>
                <th>Items</th>
                <th>Medicines</th>
              </tr>
            </thead>
            <tbody>
              ${orders.map(order => `
                <tr>
                  <td>${order.id}</td>
                  <td>${new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>
                    <span class="status status-${order.status.toLowerCase()}">
                      ${order.status}
                    </span>
                  </td>
                  <td>${order.totalPrice.toFixed(2)} FCFA</td>
                  <td>${order.items?.length || 0}</td>
                  <td>${order.items?.map((item: any) => `${item.medicine?.name || 'Unknown'} (${item.quantity})`).join(', ') || 'N/A'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="footer">
            <p>This report was generated by Southwest Regional Fund for Health Promotion</p>
          </div>
        </body>
      </html>
    `
  }

  /**
   * Download file with given content
   */
  private static downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }

  /**
   * Export orders with filters
   */
  static async exportOrders(
    orders: any[],
    options: ExportOptions
  ): Promise<void> {
    let filteredOrders = [...orders]

    // Apply filters
    if (options.dateFrom) {
      filteredOrders = filteredOrders.filter(order =>
        new Date(order.createdAt) >= new Date(options.dateFrom!)
      )
    }

    if (options.dateTo) {
      filteredOrders = filteredOrders.filter(order =>
        new Date(order.createdAt) <= new Date(options.dateTo!)
      )
    }

    if (options.status) {
      filteredOrders = filteredOrders.filter(order =>
        order.status.toLowerCase() === options.status!.toLowerCase()
      )
    }

    if (options.orderIds && options.orderIds.length > 0) {
      filteredOrders = filteredOrders.filter(order =>
        options.orderIds!.includes(order.id)
      )
    }

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `orders_${timestamp}.${options.format}`

    // Export based on format
    if (options.format === 'csv') {
      this.exportToCSV(filteredOrders, filename)
    } else {
      this.exportToPDF(filteredOrders, filename)
    }
  }
}

