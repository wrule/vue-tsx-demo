import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class ViewTest2 extends Vue {
  @Prop({ default: '是大是大非' }) private msg!: string;
  public render(): VNode {
    return (
      <div>{this.msg}</div>
    );
  }
}
