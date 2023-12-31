export interface ListData {
  label: string
  href?: string
  dateCreated?: string
  list?: ListData[]
}
export const experimentData: ListData[] = [
  {
    label: "experiments",
    list: [
      {
        href: "/experiments/has-pseudo-class",
        label: "has pseudo class",
        dateCreated: "11-27-2023",
      },
      {
        href: "/experiments/dialog-element",
        label: "dialog element",
        dateCreated: "11-20-2023",
      },
      {
        href: "/experiments/toggle-switch",
        label: "toggle switch",
        dateCreated: "11-15-2023",
      },
    ],
  },
]
