- [[Package Status]].
- Package has it's own `size` and `weight`
- The package has the [[Package Delivery]] by one-to-one relation
- We should track all [[Package Activity]] related to the package, since we might need it for some investigations(when the package is lost, and we want to track all the details about it)

The business logic behind the package:
User(sender) can create the package with minimum data: `size`, `weight`, `sender` and `receiver`.
User(sender) can place a package to the postbox cell
User(receiver) can pick up the package from the postbox