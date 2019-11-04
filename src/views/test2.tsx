import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import * as TSX from 'vue-tsx-support';

interface ComProps {
  msg: string;
}

@Component
export default class ViewTest2 extends TSX.Component<ComProps> {
  @Prop({ type: String })
  private msg!: string;
  public render(): VNode {
    return (
      <div>
        <div>{this.msg}</div>
      </div>
    );
  }
}
