import { datasets } from "./models/information"

const dateToDataset = {}

datasets.forEach(d => {
  dateToDataset[d.date] = d
})

const config = {
  datasets: datasets,
  dateToDataset: dateToDataset,
}

export default config