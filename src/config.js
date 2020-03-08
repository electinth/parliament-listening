const datasets = [
  {
    name: "27 ก.พ. 2563 อภิปรายไม่ไว้วางใจวันที่ 4",
    date: "27-02-2020"
  },
  {
    name: "26 ก.พ. 2563 อภิปรายไม่ไว้วางใจวันที่ 3",
    date: "26-02-2020"
  },
  {
    name: "25 ก.พ. 2563 อภิปรายไม่ไว้วางใจวันที่ 2",
    date: "25-02-2020"
  },
  {
    name: "24 ก.พ. 2563 อภิปรายไม่ไว้วางใจวันที่ 1",
    date: "24-02-2020"
  },
  {
    name: "25 ก.ค. 2562 แถลงนโยบาย​ฯ",
    date: "25-07-2019"
  }
]

const dateToDataset = {}

datasets.forEach(d => {
  dateToDataset[d.date] = d
})

const config = {
  datasets: datasets,
  dateToDataset: dateToDataset,
}

export default config