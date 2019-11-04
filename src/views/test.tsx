import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import * as TSX from 'vue-tsx-support';
import ViewTest2 from './test2';

interface ComProps {
  msg: string;
}

@Component({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
})
export default class ViewTest extends TSX.Component<ComProps> {
  private msg!: string;
  public render(): VNode {
    return (
      <div>
        <div>{this.msg}</div>
        <ViewTest2 msg="1" />
      </div>
    );
  }
}
