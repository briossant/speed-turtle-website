#!/usr/bin/env bash
rsync --log-file=FILE -ru /home/bcr/WebstormProjects/speed-turtle/dist/ bcr@mapland.fr:/home/bcr/webServ/public/piquette/
