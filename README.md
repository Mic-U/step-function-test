# Step Function Test

## Requirement

- [Serverless Framework](https://serverless.com)

## Usage

Edit serverless.yml.

You need to write YOUR AWS ACCOUNT ID in custom.config.accountId.


```yaml:serverless.yml
custom:
  config:
    accountId: "your Account ID"
    stage: ${opt:stage, self:provider.stage}
```

Then, you can deploy

`sls deploy`
