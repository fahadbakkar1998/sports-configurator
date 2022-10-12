import { FloorItem } from '../../floor.item';
import { Root } from './root';
import { calculateTunnel, calculateBarrier } from '../net.quoter';
import { decimalPlaces, itemLayerHeight } from '../../../../../constants';

export class ShellCage extends FloorItem {
  constructor(info) {
    super(info);
    this.scene = info.model.scene.scene;
    this.root = new Root(this);
    this.add(this.root);
    this.root.position.y = itemLayerHeight;
  }

  redrawComponents() {
    this.root.redrawComponents(this.metadata.components);
  }

  getPrice() {
    const components = this.metadata.components;
    const net = components.net.value;
    const outContainer = components.out_container.value;
    const inContainer = components.in_container.value;
    const dividers = components.dividers.value;
    const ribLine = components.rib_line.value;

    const use = net.use.value;
    const netType = net.net_type.value;
    const outContainerWidth = outContainer.width.value;
    const outContainerHeight = outContainer.height.value;
    const outContainerLength = outContainer.length.value;
    const inContainerGap = inContainer.gap.value;
    const inContainerWidth = outContainerWidth - inContainerGap * 2;
    const inContainerHeight = outContainerHeight - inContainerGap * 2;
    const inContainerLength =
      inContainer.deltaZ.value[1] - inContainer.deltaZ.value[0];
    const ribLineNum = this.root.outContainer.ribLines.length;
    const ribLinePricePerUnit = components.rib_line.price_per_unit;

    let price = 0;

    // calculate inContainer price.
    price += calculateTunnel({
      use,
      width: inContainerWidth,
      height: inContainerHeight,
      length: inContainerLength,
    })[netType];

    // calculate dividers price.
    dividers.forEach((divider) => {
      price += calculateBarrier({
        use,
        width: divider.value.deltaZ.value[1] - divider.value.deltaZ.value[0],
        height: inContainerHeight,
      })[netType];
    });

    // calculate rib lines price.
    price += outContainerLength * ribLineNum * ribLinePricePerUnit;

    return price.toFixed(decimalPlaces);
  }
}
