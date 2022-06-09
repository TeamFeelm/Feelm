interface tabProps {
  tab: number;
}

const TabContent = ({ tab }: tabProps) => {
  return [
    <div>습습</div>,
    <div>스-ㅂ습습</div>,
    <div>💙</div>,
    <div>내용3</div>,
  ][tab];
};

/*-------------------------------------------
  CSS
-------------------------------------------*/

export default TabContent;
