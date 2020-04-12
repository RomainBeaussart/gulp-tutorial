# Gulp

## Parallel and series task

Tasks are executed in series and in parallel. In this case, we convert a *.scss* file, on the *css* folde, in *.css*, and resize all images in the *images* folder.

```bash
$ npx gulp
```

## Watcher task

Run resizing images in the *images* folder. Each modifications run the task. The task is executed only with the news or modified images.

```bash
$ npx gulp watcher
```