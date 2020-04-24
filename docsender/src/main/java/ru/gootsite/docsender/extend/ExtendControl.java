package ru.gootsite.docsender.extend;

import java.util.List;
import org.springframework.stereotype.Service;
import ru.gootsite.docsender.core.BaseControl;
import ru.gootsite.docsender.core.BaseDocument;
import ru.gootsite.docsender.core.ControlError;

@Service
public class ExtendControl extends BaseControl {

    protected List<ControlError> check(ExtendDocument document) {
        List<ControlError> errors = super.check(document);

        String extend = document.getExtend();
        if (!checkStringRequired(extend)) {
            errors.add(new ControlError("required_extend"));
        }

        return errors;
    }

}
