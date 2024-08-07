---

kanban-plugin: basic

---

## Backlog

- [ ] [[Base aggregate implementation]]
- [ ] Add a proper readme.md to the repository's root
- [ ] [[Package Entity(aggregate root)]]
- [ ] Query object for business layer
- [ ] Setup errors structure:<br>- Base error<br>- Infra error<br>- App error<br>- API error(with a proper fields and description for a client)<br><br>Basic error fields<br>`errorId, message, stack?, cause?, requestId?, metadata?`<br><br>- [ ] Move /lib/domain/errors to new exception folder
- [ ] Github resources: https://github.com/Sairyss/domain-driven-hexagon/blob/master/src/libs/exceptions/exception.base.ts
- [ ] Add address to the user
- [ ] Add `isOpened` status
- [ ] Implement the unit of work base


## In Process



## Done

- [ ] Postbox aggregate:<br>- id<br>- address<br>- postbox cells<br>- status: active, closed<br>- dates(created, updated)
- [ ] Make basic abstract repository
- [ ] [[Address value object]]
- [ ] Request logging
- [ ] Add a proper error handling<br>1. Proper environment management(no tech details on prod)<br>2. Handle all errors
- [ ] Add JWT authentication
- [ ] Add user validation<br>- Uniqueness case




%% kanban:settings
```
{"kanban-plugin":"basic","new-note-folder":"Kanban cards"}
```
%%