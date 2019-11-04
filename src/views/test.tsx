import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import * as TSX from 'vue-tsx-support';
import VMapGrid from '@/components/MapGrid';
import ViewTest2 from './test2';
import { MapGrid } from 'blockrpg-core/built/Model/MapBlock/Entity/MapGrid';

interface ComProps {
  msg: string;
}

@Component
export default class ViewTest extends TSX.Component<ComProps> {
  @Prop({ type: String })
  private msg!: string;

  private testMapGrid: MapGrid = new MapGrid({
    map: {
      resId: 0,
      resNum: 1,
    },
  });

  public render(): VNode {
    return (
      <div>
        <div>{this.msg}</div>
        <ViewTest2 msg='11111' />
        <VMapGrid value={this.testMapGrid} />
      </div>
    );
  }

  public created(): void {
    console.log(this.testMapGrid);
  }
}
