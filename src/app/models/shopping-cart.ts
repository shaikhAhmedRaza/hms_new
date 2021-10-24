export class CartItem {
  public id: number;
  public productId: number;
  public name: string;
  public price: number;
  public quantity: number = 0;
  public image: string;
  public description:string;
  public gstCompliance:number;
  public orderID: number;
  public gstPrice:number;
  public isFull: boolean;
  public kotPrinted: boolean;
}
export class ShoppingCart {
  public id: number;
  public adminId: number;
  public userId: number;
  public tableIds: Array<any> = [];
  public orderitems: CartItem[] = new Array<CartItem>();
  public orderStatus: OrderStatus[];
  public deliveryOptionId: number;
  public grossTotal: number = 0;
  public deliveryTotal: number = 0;
  public itemTotal: number = 0;
  public gstTotal: number = 0;
  public itemCount: number = 0;
  public paymentMode: number;
  public discountInPercent: number ;
  public discountInRupees: number;
  public additionalAmount: number;
  public deliveryMode: string;
  public updateFrom(src: ShoppingCart) {
      this.adminId = src.adminId;
      this.userId = src.userId;
      this.tableIds = src.tableIds;
      this.orderitems = src.orderitems;
      this.deliveryOptionId = src.deliveryOptionId;
      this.grossTotal = src.grossTotal;
      this.deliveryTotal = src.deliveryTotal;
      this.itemTotal = src.itemTotal;
      this.gstTotal = src.gstTotal;
      this.itemCount = src.itemCount;
      this.paymentMode = src.paymentMode;
      this.discountInPercent = src.discountInPercent;
      this.discountInRupees = src.discountInRupees;
      this.additionalAmount = src.additionalAmount;
      this.deliveryMode = src.deliveryMode;
    }
}

export class OrderStatus {
  public id?: number;
  public orderId?: number;
  public status: number;
   public createdOn? : Date;
  // public name: string;
}