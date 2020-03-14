const datasets = [
  {
    name: "25 ก.ค. 2562 แถลงนโยบาย​ฯ",
    date: "25-07-2562"
  }
]

const dateToDataset = {}

datasets.forEach(d => {
  dateToDataset[d.date] = d
})

const config = {
  datasets: datasets,
  dateToDataset: (d) => dateToDataset[d]
}

export default config