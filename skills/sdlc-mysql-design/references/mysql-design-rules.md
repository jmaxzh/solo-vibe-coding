# MySQL Design Rules

Rules (L2) for the [main skill](../SKILL.md). Basis identifiers `P1`–`P4` refer to its principles; rule identifiers are shared across the entry, this reference, and the examples. Section selection follows R07a and R00a.

## Contents

- [Data modeling](#data-modeling)
  - [Entities, relationships, and field ownership](#entities-relationships-and-field-ownership)
- [Table design](#table-design)
  - [Names and comments](#names-and-comments)
  - [Data types](#data-types)
  - [Keys and constraints](#keys-and-constraints)
  - [Character sets and collations](#character-sets-and-collations)
- [SQL programming](#sql-programming)
  - [Queries](#queries)
  - [Data modification](#data-modification)
  - [Expressions and functions](#expressions-and-functions)
- [Transactions and consistency](#transactions-and-consistency)
  - [Transaction management](#transaction-management)
  - [Concurrency control](#concurrency-control)
- [Database security](#database-security)
- [Performance optimization](#performance-optimization)
  - [Index optimization](#index-optimization)
  - [Query optimization](#query-optimization)
  - [Write optimization](#write-optimization)
  - [Execution plans and performance verification](#execution-plans-and-performance-verification)

## Data modeling

### Entities, relationships, and field ownership

- **R08a Row grain** When modeling a table, define the business object, relationship, or event represented by each row and keep that row grain consistent within the table. See [examples](mysql-design-examples.md#row-grain). Basis: P1. Criterion: Every row has the declared meaning.

- **R09a Relationships and uniqueness** When modeling a relationship, define minimum and maximum cardinality on both sides. Basis: P1. Criterion: Both sides have explicit bounds.

- **R09b** When modeling one-to-many, store the reference on the many side. Basis: P1. Criterion: The many-side table holds the reference.

- **R09c** When modeling one-to-one, use a unique reference to limit matches to at most one. Basis: P1. Criterion: The reference has a uniqueness constraint.

- **R09d** When modeling many-to-many, use a junction table. Basis: P1. Criterion: Associations have their own table.

- **R09e** When the same objects can be associated repeatedly, define each association's business meaning, identity, and uniqueness scope. See [examples](mysql-design-examples.md#relationships-and-uniqueness). Basis: P1. Criterion: Legitimate repetitions and duplicates can be distinguished.

- **R10a Field ownership** When placing a field, assign it to the object, relationship, or event determining its value; avoid duplicating current facts. Basis: P1. Criterion: Field placement follows value ownership without duplicated current-fact maintenance.

- **R10b** When storing a historical snapshot, retain the event-time value unchanged by current-value updates. See [examples](mysql-design-examples.md#field-ownership). Basis: P1. Criterion: Renaming/repricing does not rewrite snapshots.

- **R11a Referential integrity** When defining reference creation or changes, specify whether the target must exist and which states it must satisfy. Basis: P1. Criterion: Existence and allowed states are explicit.

- **R11b** When defining target deletion or invalidation, specify treatment of existing references. Basis: P1. Criterion: Existing references have a defined outcome.

- **R11c** When enforcing reference requirements, use business write flows under [keys and constraints](#keys-and-constraints) and [concurrency control](#concurrency-control). See [examples](mysql-design-examples.md#referential-integrity). Basis: P1. Criterion: Committed writes preserve the declared reference rules.

## Table design

### Names and comments

- **R12a** When naming databases, tables, or columns, use lowercase letters, digits, and underscores; prohibit initial digits, reserved words, and abbreviations whose meaning is undefined. Basis: P1. Criterion: Names satisfy the character, first-character, and meaning restrictions.

- **R13a** When naming an index, express its columns or purpose; `uniq_` and `idx_` are optional unique/ordinary prefixes, and the primary index name is `PRIMARY`. Basis: P1. Criterion: Index names expose purpose; optional prefixes remain optional.

- **R14a** When column meanings, state values, or constraints change, update column comments and related definitions. Basis: P1. Criterion: Comments and definitions describe the changed behavior.

### Data types

- **R15a** When columns reference or compare the same values, keep data types and signedness compatible; prefer identical definitions where compatible alternatives exist. Basis: P1. Criterion: Referenced/comparison columns have compatible definitions.

- **R16a** When representing exact monetary amounts, use `DECIMAL` with explicit precision/scale or integers in a defined smallest unit. Basis: P1. Criterion: The schema defines an exact representation.

- **R16b** When defining monetary values, define currency and rounding rules. Basis: P1. Criterion: Currency and rounding are unambiguous.

- **R16c** When storing, binding, or calculating exact amounts, preserve exact representation throughout; do not calculate in floating point before conversion. Basis: P1. Criterion: No earlier step introduces floating-point rounding.

- **R17a** When defining `FLOAT`, `DOUBLE`, or `DECIMAL`, do not set deprecated `UNSIGNED`. Basis: P1. Criterion: These types have no `UNSIGNED` attribute.

- **R18a** When defining a boolean field, use `is_xxx` and `TINYINT UNSIGNED`. Basis: P1. Criterion: Name and type follow this convention.

- **R18b** When writing boolean values, validate in the application that they are 0 or 1. Basis: P1. Criterion: Other values are rejected.

- **R19a** When using `CHAR`, verify trailing-space handling against the field's business meaning. Basis: P1. Criterion: Space-sensitive cases preserve required distinctions.

- **R20a** When choosing or interpreting temporal types, account for `TIMESTAMP` conversion between session time zone and UTC and the absence of this conversion in `DATETIME`. Basis: P1. Criterion: Time interpretation matches the selected type.

- **R20b** When original zone names or offsets must be retained, store them separately. Basis: P1. Criterion: Original zone information remains recoverable.

- **R21a** When defining audit fields, use `created_at` for creation and `updated_at` for last modification. Basis: P1. Criterion: Names retain these meanings.

- **R21b** When auditing mutable business records, include both audit fields; for append-only records, include creation time only. Basis: P1. Criterion: Field presence matches record mutability.

- **R21c** When designing junction or other tables, choose audit-field presence according to their audit needs. Basis: P1. Criterion: Audit needs determine field presence.

- **R22a** When defining audit timestamps, use `DATETIME(3)`, millisecond precision, and Beijing time with connection time zone `+08:00`. Basis: P1. Criterion: Schema precision and connection time zone agree.

- **R23a** When defining audit defaults, use `NOT NULL DEFAULT CURRENT_TIMESTAMP(3)` and add `ON UPDATE CURRENT_TIMESTAMP(3)` for `updated_at`. Basis: P1. Criterion: DDL contains the applicable clauses.

- **R23b** When writing audited records, let the database maintain audit timestamps without redundant application assignments. Basis: P1. Criterion: Application writes do not redundantly set audit values.

### Keys and constraints

- **R24a** When designing InnoDB tables, explicitly define stable, short primary keys. Secondary-index records contain primary-key columns, so wider keys increase secondary-index cost. Basis: P1. Criterion: Primary keys are explicit; width is assessed against secondary-index cost.

- **R25a** When a field is required, mark it `NOT NULL`. Basis: P1. Criterion: Required columns reject `NULL`.

- **R26a** When defining constraints, do not use `CHECK`. Basis: P1. Criterion: DDL contains no `CHECK`.

- **R26b** When writing data through any application entry point, validate ranges, enums, and field combinations and reject invalid writes. See [examples](mysql-design-examples.md#application-validation). Basis: P1. Criterion: Every write entry point enforces the same validation.

- **R27a** When enforcing business uniqueness, use unique indexes rather than query-before-insert; account for their allowance of multiple `NULL` values. Basis: P1. Criterion: The index enforces the intended scope including nullability.

- **R28a** When defining idempotency identifiers, enforce uniqueness within the business-operation and tenant scope. Basis: P1. Criterion: The unique key matches the operation's scope.

- **R28b** When defining columns participating in idempotency uniqueness, mark all of them `NOT NULL`. Basis: P1. Criterion: No participating column is nullable.

- **R29a** When maintaining referential integrity, do not use foreign-key constraints or cascades; use the business write flows in R11c and R54a. Basis: P1, R11c, R54a. Criterion: DDL has no foreign keys/cascades.

### Character sets and collations

- **R30a** When storing text, use `utf8mb4`. Basis: P1. Criterion: Text definitions use `utf8mb4`.

- **R31a** When text columns reference or compare the same values, keep character sets and collations compatible; prefer identical definitions where compatible alternatives exist. Basis: P1. Criterion: Related text columns have compatible definitions.

- **R32a** When changing collations, first check equality changes and newly duplicate values that would violate uniqueness. Basis: P1. Criterion: Equality and duplicate checks precede the change.

## SQL programming

- **R33a** When implementing SQL business flows, do not use stored procedures. Basis: P3. Criterion: The flow does not depend on stored procedures.

- **R33b** When implementing branching, commits, or rollbacks, control them in application code. Basis: P3. Criterion: Application code owns these decisions.

### Queries

- **R34a** When writing stable business queries, explicitly select required columns; avoid `SELECT *`. Basis: P3. Criterion: The projection lists business-required columns.

- **R35a** When pagination or single-row selection requires deterministic order, use sort keys that jointly order rows uniquely. Basis: P3. Criterion: Ties cannot leave row order ambiguous.

- **R36a** When defining a pagination cursor, include every sort key. Basis: P3. Criterion: Cursor fields cover the complete ordering.

- **R36b** When assessing cursor-pagination consistency, account for omissions/duplicates from concurrent sort-key changes; do not promise a consistent cross-page snapshot. Basis: P3. Criterion: The consistency claim includes this boundary.

### Data modification

- **R37a** When a data error must fail the write, do not suppress it with `INSERT IGNORE` or `UPDATE IGNORE`. Basis: P3. Criterion: Required failures remain visible.

- **R38a** When building `UPDATE`/`DELETE`, prevent empty parameters or omitted dynamic predicates from causing full-table operations; `LIMIT` cannot replace business scope. Basis: P3. Criterion: Empty/missing inputs cannot remove the business scope.

- **R39a** When interpreting `updated_at` under R23a, treat it as automatically changing with row-content changes, not as every update statement's execution time. Basis: P3, R23a. Criterion: No-op statements are not assumed to advance the timestamp.

- **R40a** When performing ordinary updates, do not substitute `REPLACE INTO`: primary/unique conflicts can reset unspecified fields to defaults and trigger delete/insert behavior. Basis: P3. Criterion: Ordinary update semantics are preserved.

### Expressions and functions

- **R41a** When comparing values, match types; do not let implicit conversion decide critical business comparisons. Basis: P3. Criterion: Comparison operands have intentional compatible types.

- **R42a** When validating length, distinguish bytes, characters, and visible graphemes; `LENGTH` counts bytes and `CHAR_LENGTH` counts characters, neither visible graphemes. Basis: P3. Criterion: The chosen unit matches the business limit.

- **R43a** When a `NOT IN` set contains `NULL`, do not interpret an unmatched value's possible `UNKNOWN` result as confirmed non-membership. Basis: P3. Criterion: Null-containing cases preserve three-valued logic.

- **R44a** When using `COUNT(DISTINCT ...)`, account for excluded `NULL`: one-column form excludes nulls, and multi-column form counts only combinations with all participating columns nonnull. Basis: P3. Criterion: Expected counts exclude the stated null cases.

- **R45a** When interpreting `SUM`, account for `NULL` on empty or all-null inputs and no result row when `GROUP BY` forms no group. Basis: P3. Criterion: Empty/null/group-absent cases have distinct expected results.

- **R45b** When replacing an empty aggregation with zero, do so only if business rules define it as zero. Basis: P3. Criterion: Zero substitution has an explicit business basis.

- **R46a** When defining continuous time intervals, prefer half-open boundaries: include the start and exclude the end. Basis: P3. Criterion: Adjacent intervals neither overlap nor omit their boundary.

- **R46b** When computing time boundaries, use the business time zone and the same time basis as stored values. Basis: P3. Criterion: Bound parameters align with stored time meaning.

## Transactions and consistency

### Transaction management

- **R47a Statements inside transactions** When preparing explicit transactions, perform queries, business validation, and write preparation outside them. Basis: P2. Criterion: Preparation is outside any active explicit transaction.

- **R47b** When executing an explicit transaction, allow only necessary data modifications and transaction control; prohibit ordinary/locking queries and query components within writes, including subqueries. See [examples](mysql-design-examples.md#statements-inside-transactions). Basis: P2. Criterion: Every in-transaction statement meets the allowlist.

- **R48a Transaction connection** When writes must succeed together, execute them on the same connection in the same transaction; preserve that boundary across connection switching, asynchronous execution, and propagation settings. See [examples](mysql-design-examples.md#transaction-connection). Basis: P2. Criterion: All jointly required writes share connection and transaction.

- **R49a Implicit commits** When executing business writes, do not simulate nesting with `START TRANSACTION` or switch `autocommit` from 0 to 1 between writes; both implicitly commit. Basis: P2. Criterion: Neither operation splits the business transaction.

- **R49b** When executing a business write transaction, keep DDL such as `ALTER TABLE` and `TRUNCATE TABLE` outside it. See [examples](mysql-design-examples.md#implicit-commits). Basis: P2. Criterion: No DDL occurs between business writes.

- **R50a Failure handling** When a required write errors or fails its business condition, stop later writes and roll back the entire transaction; a failed statement does not imply earlier writes were undone. Basis: P2. Criterion: No earlier required write is left committed alone.

- **R50b** When a deadlock or lock timeout occurs, ensure full rollback before considering retries. Basis: P2. Criterion: No partial transaction survives into retry.

- **R50c** When retrying after these failures, retry the whole transaction only if safe and with a finite retry limit. Basis: P2. Criterion: Retries are whole-transaction, safe, and bounded.

- **R50d** When commit status is uncertain, verify using idempotency identifiers first. See [examples](mysql-design-examples.md#failure-handling). Basis: P2. Criterion: Recovery checks the original operation before retry.

- **R51a External operations** When a business flow includes external calls or message sending, do not treat a local transaction as atomically committing or rolling them back. See [examples](mysql-design-examples.md#external-operations). Basis: P2. Criterion: External outcomes remain outside local atomicity claims.

### Concurrency control

- **R52a Business-conditional updates** When guarding a write, prefer write-time predicates on business fields. Basis: P2. Criterion: Business conditions are checked by the write itself.

- **R52b** When computing new values from data read outside the transaction, check relevant original values or a valid version in the write predicate to avoid overwriting concurrent changes. Basis: P2. Criterion: Stale computations cannot silently overwrite changes.

- **R52c** When one conditional statement suffices, do not add an explicit transaction. See [examples](mysql-design-examples.md#business-conditional-updates). Basis: P2. Criterion: A sufficient single write uses no added transaction.

- **R53a Timestamp checks** When suitable business fields are absent, match original `updated_at` only if every relevant modification changes it and the old value cannot be reused during validation. Basis: P2. Criterion: Both timestamp-safety conditions hold.

- **R53b** When using timestamp checks, preserve milliseconds in reads, writes, serialization, and binding. Basis: P2. Criterion: The original millisecond value reaches the predicate intact.

- **R53c** When timestamp-safety conditions cannot be guaranteed, use a non-reused version identifier or another concurrency mechanism. See [examples](mysql-design-examples.md#timestamp-checks). Basis: P2. Criterion: Unsafe timestamps are not used as version proof.

- **R54a Referential integrity** When reference creation/change competes with target deletion/invalidation, coordinate using conditional updates, uniqueness, and necessary transactions under R11c. See [examples](mysql-design-examples.md#concurrent-customer-reference-maintenance). Basis: P2, R11c. Criterion: Concurrent committed outcomes preserve reference requirements.

- **R55a Update results** When assessing required-write success, first determine whether the driver reports matched or changed rows. Basis: P2. Criterion: Result interpretation matches driver configuration.

- **R55b** When a write predicate is unmet, do not report success; zero changed rows alone does not prove an unmet predicate. See [examples](mysql-design-examples.md#update-results). Basis: P2. Criterion: No-op matches are distinguished from unmet conditions.

- **R56a Write order** When transactions compete for resources, use consistent table/record write order; do not infer actual lock order from SQL text order. See [examples](mysql-design-examples.md#write-order). Basis: P2. Criterion: Competing paths share an access order rather than merely predicate order.

## Database security

- **R57a** When passing application data into SQL, bind values as parameters rather than concatenating them. Basis: P3. Criterion: Data values use driver binding.

- **R58a** When constructing dynamic table/column names or sort directions, map code allowlists into SQL structure; value placeholders cannot replace structure. Basis: P3. Criterion: Structural choices come only from allowed mappings.

## Performance optimization

- **R59a Request round trips** When optimizing a business operation, reduce database requests while preserving correctness and overall performance. Basis: P4. Criterion: Request savings do not weaken results or worsen the complete path.

### Index optimization

- **R60a Index reuse and changes** When designing indexes for primary queries, prefer reuse across those queries. Basis: P4. Criterion: Index choices account for the main query set.

- **R60b** When existing paths meet performance needs, do not add indexes merely for new SQL/predicates. Basis: P4. Criterion: New syntax alone does not justify extra index cost.

- **R60c** When merging or replacing indexes, check other queries and unique constraints. See [examples](mysql-design-examples.md#index-reuse-and-changes). Basis: P4. Criterion: Existing access needs and uniqueness survive.

- **R61a Low-cardinality fields** When assessing low-cardinality indexes, consider target distribution, combined filters, ordering, coverage, table lookups, and write costs; do not reject solely for few distinct values. See [examples](mysql-design-examples.md#low-cardinality-fields). Basis: P4. Criterion: The decision covers workload benefits and costs.

- **R62a Prefix indexes** When choosing string-prefix index lengths, use actual data. Basis: P4. Criterion: Length selection has data-based evidence.

- **R62b** When enforcing full-value uniqueness, do not substitute unique prefix indexes: they may reject distinct full values sharing a prefix. See [examples](mysql-design-examples.md#prefix-indexes). Basis: P4. Criterion: Legitimate full values remain distinguishable.

- **R63a Composite indexes** When ordering composite-index columns, balance filtering, left-prefix reuse, ordering, and grouping; equality columns commonly precede ranges, but selectivity is not a universal ordering rule. See [examples](mysql-design-examples.md#composite-indexes). Basis: P4. Criterion: Column order is justified by query patterns.

- **R64a Sort cost** When evaluating `filesort`, compare sorting, scans, and added-index maintenance rather than declaring an index bad solely for sorting. See [examples](mysql-design-examples.md#sort-cost). Basis: P4. Criterion: The decision compares complete costs.

- **R65a Indexed columns and expressions** When filtering a time column by day, prefer direct time-range predicates. Basis: P4. Criterion: Predicates expose original-column boundaries.

- **R65b** When expression filtering is necessary, evaluate matching functional or generated-column indexes. See [examples](mysql-design-examples.md#indexed-columns-and-expressions). Basis: P4. Criterion: Alternatives match the actual expression.

- **R66a Leading wildcards** When assessing leading-wildcard searches, account for ordinary B-tree indexes generally lacking effective range scans for them. Basis: P4. Criterion: An index scan is not mistaken for selective range access.

- **R66b** When replacing a search with full-text or dedicated search, preserve the original matching semantics. See [examples](mysql-design-examples.md#leading-wildcards). Basis: P4. Criterion: Replacement matches the same business contract.

### Query optimization

- **R67a Batch queries** When per-row queries are mergeable, replace them with joins or batches. Basis: P4. Criterion: Mergeable work avoids per-row requests.

- **R67b** When sizing query batches, determine chunking from parameter count, result volume, and actual load. See [examples](mysql-design-examples.md#batch-queries). Basis: P4. Criterion: Batch sizing addresses these resource dimensions.

- **R68a Database-side computation** When computation is accurately expressible in SQL and its complete-path cost meets the task’s performance requirements, prefer database-side computation. Basis: P4. Criterion: Placement meets the task’s complete-path performance requirements.

- **R68b** When updating computed values, combine the calculation and necessary business predicates in one write. See [examples](mysql-design-examples.md#database-side-computation). Basis: P4. Criterion: The write checks conditions while computing the value.

- **R69a Multiple detail joins** When independent one-to-many joins feed totals, aggregate each detail set at the required result grain before joining to prevent multiplication and double-counting. Basis: P4. Criterion: Joined detail sets contribute each amount once.

- **R69b** When correcting join multiplication, do not use `SUM(DISTINCT ...)` as compensation. See [examples](mysql-design-examples.md#multiple-detail-joins). Basis: P4. Criterion: Equal legitimate amounts are not collapsed.

- **R70a Pagination with joins** When paginating primary records with details, select the page using complete filtering and ordering before retrieving details, including detail-dependent criteria before pagination. See [examples](mysql-design-examples.md#pagination-with-joins). Basis: P4. Criterion: No eligibility/order criterion is postponed until after paging.

- **R71a Repeated large-field transfer** When joins repeatedly transmit large primary fields, evaluate separate batch reads for primary records and details. Basis: P4. Criterion: The comparison includes transfer and extra round trips.

- **R71b** When splitting these reads, handle version consistency and avoid per-row queries. See [examples](mysql-design-examples.md#repeated-large-field-transfer). Basis: P4. Criterion: Assembly satisfies the consistency contract without per-row queries.

- **R72a Deferred large-field reads** When filtering, sorting, and grouping do not depend on large fields, evaluate processing IDs/necessary fields before fetching large fields. Basis: P4. Criterion: Deferred fields are not prerequisites for selection.

- **R72b** When omitting large fields from intermediate work, preserve deduplication and grouping semantics. See [examples](mysql-design-examples.md#deferred-large-field-reads). Basis: P4. Criterion: Results retain the original comparison grain.

### Write optimization

- **R73a Batch writes** When inserts are mergeable, prefer multi-row `INSERT ... VALUES`. Basis: P4. Criterion: Mergeable inserts use fewer statement sends.

- **R73b** When updates can be combined, evaluate set-based updates. Basis: P4. Criterion: Evaluation preserves predicates and failure semantics.

- **R73c** When choosing write-batch size, validate against field sizes and actual load. Basis: P4. Criterion: Sizing is not based on row count alone.

- **R73d** When splitting transactions into batches, allow only independently committable batches; preserve writes that must succeed together. See [batch writes](mysql-design-examples.md#batch-writes); [atomic updates](mysql-design-examples.md#atomic-increment-fewer-round-trips-without-lost-updates). Basis: P4. Criterion: Partial commits do not violate success conditions.

### Execution plans and performance verification

#### Applicability and classification

- **R74a** When main execution costs cannot reliably be inferred from schema, indexes, and SQL, classify the statement as complex SQL. Basis: P4. Criterion: Static analysis leaves material uncertainty in any of: distribution/parameter-dependent scans, table lookups or index choices; join/subquery/aggregation/deduplication intermediate sizes or execution counts; scale/field-size-dependent sorting, transfer or batch-write costs.

- **R74b** When SQL is complex, require dedicated performance verification; otherwise do not require extra plans, performance datasets, or load tests under this skill. Basis: P4. Criterion: Verification obligations match complexity.

- **R76a** When classifying SQL complexity, do not rely on statement length, join count, or returned rows alone. See [classification examples](mysql-design-examples.md#classifying-complex-sql). Basis: P4. Criterion: Classification depends on cost uncertainty.

#### Verification method

- **R77a** When performing dedicated performance verification, use real MySQL with the target version/engine and data covering the scale, distribution, parameters, and field sizes causing uncertainty; empty databases or a few sample rows do not suffice. Basis: P4. Criterion: Verification data covers the identified uncertainty.

- **R78a** When inspecting access paths for dedicated verification, use `EXPLAIN`. Basis: P4. Criterion: Access paths have an estimated plan.

- **R78b** When actual rows, loops, or time are needed, use `EXPLAIN ANALYZE` on supported statements after assessing execution cost/effects; it executes the statement. See [official EXPLAIN documentation](https://dev.mysql.com/doc/refman/8.4/en/explain.html). Basis: P4. Criterion: Support and execution effects are checked first.

- **R79a** When measuring dedicated performance verification, measure actual requests and complete business-path latency, including transfer, reading, and application computation, rather than only first-row or individual-query time. Basis: P4. Criterion: Timing covers completion of the business path.

- **R79b** When adding load validation, require it only for key concurrent paths. See [verification example](mysql-design-examples.md#verification-using-actual-data). Basis: P4. Criterion: Other paths acquire no blanket load-test requirement.

- **R80a** When reporting performance verification, state conditions, results, and unverified scope; index use, static plans, or small tests do not prove actual-load verification passed. Basis: P3. Criterion: Claims do not exceed executed evidence.
