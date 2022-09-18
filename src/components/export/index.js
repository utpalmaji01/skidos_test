import React from 'react'
import * as FileSaver from 'file-saver' // npm i file-saver
import { Workbook } from 'exceljs' //// npm i exceljs

const ExportToExcel = ({ data, fileName }) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
  const fileExtension = '.xlsx'
  const exportToCSV = () => {
    let workbook = new Workbook()
    let worksheet = workbook.addWorksheet('Sheet1')

    let header = Object.keys(data[0]).map((each) =>
      each
        .replaceAll('__', ' ')
        .replaceAll('_', ' ')
        .split(' ')
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1)
        })
        .join(' '),
    )
    let headerRow = worksheet.addRow(header)
    worksheet.getRow(1).font = { bold: true, size: 11 }
    worksheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'f0f2f4' } }

    data.forEach((d) => {
      worksheet.addRow(Object.values(d))
    })
    for (var i = 2; i <= data?.length + 1; i++) {
      worksheet.getRow(i).font = {
        name: 'Calibri',
        family: 4,
        size: 11,
      }
      console.log(1);
      if (i===data?.length + 1) {
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], {
              type: fileType,
            })
            FileSaver.saveAs(blob, fileName + fileExtension)
          })
      }
    }
    // workbook.xlsx.writeBuffer().then((data) => {
    //   let blob = new Blob([data], {
    //     type: fileType,
    //   })
    //   FileSaver.saveAs(blob, fileName + fileExtension)
    // })
  }

  return (
    <button type="primary" onClick={() => exportToCSV(data, fileName)}>
      Download excel file
    </button>
  )
}
export default ExportToExcel
