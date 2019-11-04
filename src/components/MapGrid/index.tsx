import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import * as TSX from 'vue-tsx-support';
import { MapGrid } from 'blockrpg-core/built/Model/MapBlock/Entity/MapGrid';

interface ComProps {
  value: MapGrid;
}

@Component
export default class VMapGrid extends TSX.Component<ComProps> {
  @Prop({ type: MapGrid }) private value!: MapGrid;
  public render(): VNode {
    return (
      <div>{this.value.Map.PassMask}</div>
    );
  }
}
