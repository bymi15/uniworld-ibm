/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
    if (!params.title || !params.numSlides || !params.module || !params.lecturer || !params.startTime || !params.endTime || !params.firstSlideUrl) {
        return Promise.reject({ error: 'Missing necessary fields'});
    }
	return {
	    doc: {
            numSlides: params.numSlides,
            title: params.title,
            module: params.module,
            lecturer: params.lecturer,
            startTime: params.startTime,
            endTime: params.endTime,
            firstSlideUrl: params.firstSlideUrl
	    }
    }
}
