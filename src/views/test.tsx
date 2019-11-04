import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import ViewTest2 from './test2';

@Component
export default class ViewTest extends Vue {
  @Prop({ type: String, default: '' }) private msg!: string;
  public render(): VNode {
    return (
      <div>
        <div>{this.msg}</div>
        <ViewTest2 />
      </div>
    );
  }
  public mounted(): void {
  }
}
