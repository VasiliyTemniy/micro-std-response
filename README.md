# micro-std-response
This repository holds base api response types for different languages to keep microservice-based api in sync

## Usage
While some parts of this package could be used by dependency management tools, .proto file cannot be imported this way.
Using any part of this package as a git subrepo, however, can solve this issue.

### Subrepo
To add this package as a subrepo to another git repository, run the following command:

```bash
git submodule add https://github.com/VasiliyTemniy/micro-std-response.git
```

To add only some specific part of this package, use a command like this:

```bash
git submodule add -b main -- https://github.com/VasiliyTemniy/micro-std-response.git proto
```

where 'main' is required branch name, 'proto' is the desired part of the package.