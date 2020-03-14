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

const theyWorkForUs = {
  peoplePath: "https://theyworkforus.elect.in.th/people/"
}

const config = {
  datasets: datasets,
  dateToDataset: (d) => dateToDataset[d],
  theyWorkForUs: theyWorkForUs
}

export default config