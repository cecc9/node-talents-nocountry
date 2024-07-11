import { Tab, TabsItem } from "@/types/tab"

interface Props {
  tabSelected: Tab
  tabsItems: TabsItem[]
  changeTab: (tabItem: Tab) => void
}

const TabsList = ({ tabsItems, changeTab, tabSelected }: Props) => {
  return (
    <section className="tabs">
      {tabsItems.map((item) => (
        <button
          className={`tabs__button ${
            tabSelected === item.value ? "tabs__button--active" : ""
          }`}
          key={item.value}
          onClick={() => changeTab(item.value)}
        >
          {item.label}
        </button>
      ))}
    </section>
  )
}

export default TabsList
