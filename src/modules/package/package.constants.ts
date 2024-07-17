export enum PackageSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum PackageWeight {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum PackageStatus {
  registered = 'sender:app:registered',
  inSenderPostbox = 'sender:postbox:placed',
  inTransportToWarehouse = 'warehouse:in:in-transport',
  warehouseSorting = 'warehouse:sorting',
  inTransportFromWarehouse = 'warehouse:out:in-transport',
  inTransportToReceiver = 'warehouse:in-transport',
  inReceiverPostbox = 'receiver:postbox:placed',
  pickedUpByReceiver = 'receiver:picked-up',
  pickedUpBySender = 'sender:picked-up',
}
